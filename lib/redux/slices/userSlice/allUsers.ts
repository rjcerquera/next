import { User } from "@/types"

export const allUsers = async (): Promise<{ data: User[] }> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  const result = await response.json()
  return { data: result }
}
