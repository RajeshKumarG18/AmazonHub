import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Lock,
  Mail,
  ShoppingBag,
  Heart,
  Settings,
  LogOut
} from "lucide-react";
import ProductCard from '../components/ProductCard';
import { useWishlist } from '../contexts/WishlistContext';

import { signOut, updatePassword, reauthenticateWithCredential, EmailAuthProvider, deleteUser, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc, collection, onSnapshot, deleteDoc } from 'firebase/firestore';
import type { UserProfile, Order } from '../types';
import reactLogo from '../assets/react.svg';
import { useToast } from '../contexts/ToastContext';

function AuthSignIn() {
  const { show } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          await signInWithEmailAndPassword(auth, email, password);
          show('Signed in successfully', 'success');
        } catch (e: any) {
          show(e.message || 'Sign in failed', 'error');
        } finally {
          setLoading(false);
        }
      }}
      className="space-y-3"
    >
      <input type="email" required placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" />
      <input type="password" required placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" />
      <button disabled={loading} className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600">{loading? 'Signing in...' : 'Sign In'}</button>
    </form>
  );
}

function AuthSignUp() {
  const { show } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (password !== confirm) { show('Passwords do not match', 'error'); return; }
        setLoading(true);
        try {
          const cred = await createUserWithEmailAndPassword(auth, email, password);
          if (cred.user) {
            await updateProfile(cred.user, { displayName: name });
            await setDoc(doc(db, 'users', cred.user.uid), { displayName: name, email }, { merge: true });
          }
          show('Account created', 'success');
        } catch (e: any) {
          show(e.message || 'Sign up failed', 'error');
        } finally {
          setLoading(false);
        }
      }}
      className="space-y-3"
    >
      <input type="text" required placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" />
      <input type="email" required placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" />
      <input type="password" required placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" />
      <input type="password" required placeholder="Confirm Password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" />
      <button disabled={loading} className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700">{loading? 'Creating...' : 'Create Account'}</button>
    </form>
  );
}

export default function Account() {
  
const [activeTab, setActiveTab] = useState('profile');
const { items: wishlist } = useWishlist();

const [uid, setUid] = useState<string | null>(null);
const [email, setEmail] = useState<string>('');
const [profile, setProfile] = useState<UserProfile>({ displayName: '', email: '', phone: '', dob: '', address: { street: '', city: '', state: '', zip: '' }, avatarUrl: '' });
const [orders, setOrders] = useState<Order[]>([]);
const [updatingPwd, setUpdatingPwd] = useState(false);
const [pwdCurrent, setPwdCurrent] = useState('');
const [pwdNew, setPwdNew] = useState('');
const [pwdMsg, setPwdMsg] = useState<string | null>(null);
const [deleting, setDeleting] = useState(false);
const [deleteMsg, setDeleteMsg] = useState<string | null>(null);

const user = {
  name: profile.displayName || 'User',
  email: profile.email || email || 'user@example.com',
  avatar: profile.avatarUrl || reactLogo
};

const tabs = [
{ id: 'profile', label: 'Profile', icon: User },
{ id: 'orders', label: 'Orders', icon: ShoppingBag },
{ id: 'wishlist', label: 'Wishlist', icon: Heart },
{ id: 'settings', label: 'Settings', icon: Settings }
];

// load user/profile/orders
useEffect(() => {
  const unsub = onAuthStateChanged(auth, async (u) => {
    if (!u) {
      setUid(null);
      setEmail('');
      setProfile({ displayName: '', email: '', phone: '', dob: '', address: { street: '', city: '', state: '', zip: '' }, avatarUrl: '' });
      setOrders([]);
      return;
    }
    setUid(u.uid);
    setEmail(u.email || '');

    const ref = doc(db, 'users', u.uid);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data = snap.data() as UserProfile;
      setProfile({
        displayName: data.displayName || u.displayName || '',
        email: data.email || u.email || '',
        phone: data.phone || '',
        dob: data.dob || '',
        address: { street: data.address?.street || '', city: data.address?.city || '', state: data.address?.state || '', zip: data.address?.zip || '' },
        avatarUrl: data.avatarUrl || ''
      });
    } else {
      const seed: UserProfile = { displayName: u.displayName || '', email: u.email || '', phone: '', dob: '', address: { street: '', city: '', state: '', zip: '' }, avatarUrl: '' };
      await setDoc(ref, seed, { merge: true });
      setProfile(seed);
    }

    const ordersRef = collection(db, 'users', u.uid, 'orders');
    const unsubOrders = onSnapshot(ordersRef, (qs) => {
      const list: Order[] = [];
      qs.forEach((d) => {
        const data = d.data() as any;
        list.push({ id: d.id, createdAt: data.createdAt?.seconds ? data.createdAt.seconds * 1000 : data.createdAt || Date.now(), items: data.items || [], total: data.total || 0, status: data.status || 'confirmed' });
      });
      list.sort((a, b) => b.createdAt - a.createdAt);
      setOrders(list);
    });
    return () => unsubOrders();
  });
  return () => unsub();
}, []);


return (


<div className="min-h-screen bg-slate-50">
      
{/* Header */}
      
<div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
<div className="max-w-7xl mx-auto px-4">
          
<h1 className="text-4xl font-bold">My Account</h1>
          
<p className="text-slate-300 mt-2">Manage your account settings and orders</p>
        
</div>
</div>

<div className="max-w-7xl mx-auto px-4 py-12">
<div className="grid lg:grid-cols-4 gap-8">
          
{/* Sidebar */}

<div className="lg:col-span-1">
<div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-slate-200">

{/* User Info */}

<div className="text-center mb-6">

<img
src={user.avatar}
alt={user.name}
className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-amber-500"/>


<h3 className="font-bold text-slate-900 text-lg">{user.name}</h3>

<p className="text-slate-600 text-sm">{user.email}</p>
              
</div>

         
{/* Navigation */}

<nav className="space-y-2">
{tabs.map((tab) => (


<button
key={tab.id}
onClick={() => setActiveTab(tab.id)}
className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${

activeTab === tab.id
? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' : 'hover:bg-slate-100 text-slate-700'                    

}`} 
>


<tab.icon className="w-5 h-5" />
{tab.label}
                  
</button>

))}


<button onClick={async ()=>{ try{ await signOut(auth);}catch(e){}}} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 transition-colors mt-4">
                  
<LogOut className="w-5 h-5" />

Sign Out

</button>

</nav>

</div>
</div>


{/* Content */}

<div className="lg:col-span-3">
            
{activeTab === 'profile' && (
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200"
>
{!uid ? (
<div>
<h2 className="text-2xl font-bold text-slate-900 mb-6">Welcome</h2>
<div className="grid md:grid-cols-2 gap-8">
{/* Sign In */}
<div>
<h3 className="font-semibold text-slate-900 mb-4">Sign In</h3>
<AuthSignIn />
</div>
{/* Sign Up */}
<div>
<h3 className="font-semibold text-slate-900 mb-4">Create Account</h3>
<AuthSignUp />
</div>
</div>
</div>
) : (
<div className="text-slate-700">You are signed in. Use the Orders, Wishlist, or Settings tabs.</div>
)}
</motion.div>
)}


{activeTab === 'orders' && (
             
             
<motion.div
                
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">


<h2 className="text-2xl font-bold text-slate-900 mb-8">Order History</h2>
                
{orders.length === 0 ? (
  <div className="text-center py-12 text-slate-500">
    <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-slate-300" />
    <p>No orders yet</p>
    <p className="text-sm mt-2">Your order history will appear here</p>
  </div>
) : (
  <div className="space-y-4">
    {orders.map((o) => (
      <div key={o.id} className="border border-slate-200 rounded-xl p-4 flex items-start gap-4">
        <div className="text-sm text-slate-600 min-w-[120px]">
          <div className="font-semibold text-slate-900">#{o.id.slice(0,6).toUpperCase()}</div>
          <div>{new Date(o.createdAt).toLocaleString()}</div>
          <div className="capitalize">{o.status}</div>
        </div>
        <div className="flex-1 space-y-2">
          {o.items.map((it) => (
            <div key={it.id} className="flex items-center gap-3">
              <img src={it.image} alt={it.name} className="w-12 h-12 rounded object-cover" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-slate-900 line-clamp-1">{it.name}</div>
                <div className="text-xs text-slate-600">Qty: {it.quantity}</div>
              </div>
              <div className="text-sm font-semibold text-slate-900">${(it.price * it.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className="min-w-[100px] text-right font-bold text-slate-900">${o.total.toFixed(2)}</div>
      </div>
    ))}
  </div>
)}


</motion.div>
            
)}

{activeTab === 'wishlist' && (


<motion.div
  
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">


<h2 className="text-2xl font-bold text-slate-900 mb-6">Wishlist</h2>

{wishlist.length === 0 ? (
  <div className="text-center py-12 text-slate-500">
    <Heart className="w-16 h-16 mx-auto mb-4 text-slate-300" />
    <p>Your wishlist is empty</p>
    <p className="text-sm mt-2">Save items you love to your wishlist</p>
  </div>
) : (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {wishlist.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
)}

</motion.div>
            
)}

{activeTab === 'settings' && (


<motion.div
 
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">


<h2 className="text-2xl font-bold text-slate-900 mb-6">Account Settings</h2>
                
<div className="space-y-6">
<div className="p-4 bg-amber-50 rounded-xl border border-amber-600">


<h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">

<Mail className="w-5 h-5" />

Email Preferences

</h3>
                    
<p className="text-sm text-amber-800 mb-3">
 
Manage your email subscription and notification settings.
 
</p>
                    
<button className="text-sm font-semibold text-amber-700 hover:text-amber-800">
                   
Configure →

</button>
 
</div>

<div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
 
<h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">

<Lock className="w-5 h-5" />
                      
Password & Security

</h3>

<p className="text-sm text-blue-800 mb-3">
 
Update your password and enable two-factor authentication.

</p>


<div className="grid sm:grid-cols-2 gap-3 mb-3">
  <input type="password" placeholder="Current password" value={pwdCurrent} onChange={(e)=>setPwdCurrent(e.target.value)} className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
  <input type="password" placeholder="New password" value={pwdNew} onChange={(e)=>setPwdNew(e.target.value)} className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
</div>
<button onClick={async ()=>{
  setUpdatingPwd(true); setPwdMsg(null);
  try{
    const u = auth.currentUser; if(!u) throw new Error('Not signed in');
    if((pwdNew||'').length<6) throw new Error('Password must be at least 6 characters');
    if(u.email && pwdCurrent){ const cred = EmailAuthProvider.credential(u.email, pwdCurrent); await reauthenticateWithCredential(u, cred); }
    await updatePassword(u, pwdNew);
    setPwdMsg('Password updated'); setPwdCurrent(''); setPwdNew('');
  }catch(e:any){ setPwdMsg(e.message||'Failed to update password'); }
  finally{ setUpdatingPwd(false); setTimeout(()=>setPwdMsg(null),3000); }
}} disabled={updatingPwd} className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg disabled:opacity-60">{updatingPwd ? 'Updating...' : 'Update Password'}</button>
{pwdMsg && <p className="text-sm mt-2 text-blue-900">{pwdMsg}</p>}

</div>


<div className="p-4 bg-red-50 rounded-xl border border-red-200">
 
<h3 className="font-semibold text-red-900 mb-2">Danger Zone</h3>

<p className="text-sm text-red-800 mb-3">

Permanently delete your account and all associated data.
                    
</p>


<button onClick={async ()=>{
  setDeleting(true); setDeleteMsg(null);
  try{ const u = auth.currentUser; if(!u) throw new Error('Not signed in'); await deleteDoc(doc(db,'users',u.uid)); await deleteUser(u); setDeleteMsg('Account deleted'); }
  catch(e:any){ setDeleteMsg(e.message||'Failed to delete account'); }
  finally{ setDeleting(false); setTimeout(()=>setDeleteMsg(null),3000); }
}} disabled={deleting} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors disabled:opacity-60">
                      
{deleting ? 'Deleting...' : 'Delete Account'}

</button>
{deleteMsg && <p className="text-sm mt-2 text-red-900">{deleteMsg}</p>}

</div>
</div>

</motion.div>

)}

</div>
</div>
</div>
</div>

);
}