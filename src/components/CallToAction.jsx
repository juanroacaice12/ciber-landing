import { NavLink } from "react-router-dom";

const callsToAction = [
    { name: 'Watch demo', href: '/' },
    { name: 'Contact sales', href: '/' },
  ];
  
  export default function CallsToAction(props) {
    return (
      <>
        {callsToAction.map((action) => (
          <NavLink
            key={action.name}
            to={action.href}
            className={props.className}
          >
            {action.name}
          </NavLink>
        ))}
      </>
    );
  }
  