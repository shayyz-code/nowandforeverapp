import Link from "next/link";
import styled from "styled-components";
import theme from "../theme";
import { usePathname } from "next/navigation";

const LinkName = styled.div`
  font-size: ${theme.fontSize.navName};
  text-align: center;
  border: 2px solid transparent;
  padding: 5px 0 5px 0;
  margin: 0 2em 0 2em;

  @media (max-width: 480px) {
    text-align: left;
    padding: 15px 80px 15px 15px;
    background: white;
    margin: 1em 0 0 2em;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
`;

const NavLink = ({ name, path }) => {
  const currentPath = usePathname();
  console.log(currentPath, path);
  const isActive = path === currentPath;
  return (
    <li>
      <Link href={path}>
        <LinkName
          style={
            isActive
              ? {
                  color: theme.color.primary,
                  borderBottomColor: theme.color.primary,
                }
              : { borderBottomColor: "transparent" }
          }
        >
          {name}
        </LinkName>
      </Link>
    </li>
  );
};

export default NavLink;
