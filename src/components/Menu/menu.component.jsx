import "./menu.style.scss";
import LinkUnderline from "../../objects/LinkUnderline/link-underline.object";

const Menu = ({ type }) => {
  let menuType;
  const mainMenuItems = [
    {
      id: 1,
      title: "About",
      slug: "about",
    },
    {
      id: 2,
      title: "Brew Guide",
      slug: "brew-guide",
    },
    {
      id: 3,
      title: "Shop",
      slug: "shop",
    },
    {
      id: 4,
      title: "Contact",
      slug: "contact",
    },
  ];

  const legalMenuItems = [
    {
      id: 1,
      title: "Privacy Policy",
      slug: "privacy-policy",
    },
    {
      id: 2,
      title: "FAQs",
      slug: "faqs",
    },
    {
      id: 3,
      title: "Terms & Conditions",
      slug: "terms-and-conditions",
    },
  ];

  switch (type) {
    case "legal":
      menuType = legalMenuItems;
      break;
    default:
      menuType = mainMenuItems;
  }

  return (
    <ul className="c-main-menu">
      {menuType.map((item, key) => {
        return (
          <li className="c-main-menu__item" key={key}>
            <LinkUnderline to={item.slug} text={item.title} />
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
