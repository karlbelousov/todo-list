import { BASE_URL } from "@/shared/constans";

const RouterLink = ({ to, children, className, ...rest }) => {
  const handleClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", to);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <a className={className} href={`${BASE_URL}/${to}`} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

export default RouterLink;
