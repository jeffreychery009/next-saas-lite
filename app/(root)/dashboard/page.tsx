"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabaseBrowser'
import { redirect, useRouter } from 'next/navigation'



const page = () => {
  const handleLogout = () => {
    supabase.auth.signOut();
    redirect('/login');
  }
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button> 
    </div>
  )
}

export default page