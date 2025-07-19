import User from "@/components/User";

export default async function UserList() {
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.users.map((user: any) => (
          <User
            key={user.id}
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
}
