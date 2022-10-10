const UserList = () => {
  const users = [
  { id: '1', name: 'Amanda', email: 'amanda@mail.com' },
  { id: '2', name: 'John', email: 'john@mail.com'}
];

const renderCard = () => <div>Users here</div> 

return (
  <div className="grid gap-5 md:grid-cols-2">
  {users.length ? renderCard() : <p className="text-center 
  col-span-2 text-gray-700 font-semibold">No User</p>}
  </div>
)
}

export default UserList