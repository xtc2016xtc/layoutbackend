"use client"

/**
 * 根路径：未登录跳 /login，已登录跳 /admin
 */
import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { getToken } from "@/lib/api"

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.replace(getToken() ? "/admin" : "/login")
  }, [router])
  return null
}
