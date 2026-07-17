import Greeting from './Greeting';
import Avatar from './Avatar';

export default function ProfileCard({ name, role, avatar }) {
  return (
    <div className="profile-card">
      <Avatar src={avatar} alt={name} />
      <Greeting name={name} />
      <p className="role">{role}</p>
    </div>
  );
}
