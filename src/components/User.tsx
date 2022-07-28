type userInfo = {
    fname: string
    lname: string
    isUser: boolean
}

const User = ({fname, lname, isUser}: userInfo) => {
  return (
    isUser ? <div>Logged in as {fname} {lname}</div> : <div>You are a quest user</div>
  )
}

export default User;