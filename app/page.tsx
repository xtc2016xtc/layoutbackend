// 时间戳：MTI-T3[熊天成]---------2025年04月18日星期五,下午 ，12:42:17
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
