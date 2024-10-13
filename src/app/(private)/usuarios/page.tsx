"use client";

import RegisterForm from "@/components/RegisterForm";
import TableUsers from "@/components/TableUsers";

export default function UsersPage() {

  return (
    <div className="flex h-screen bg-gray-900 flex-col lg:flex-row">
      <RegisterForm />
      <TableUsers />
    </div>
  );
}
