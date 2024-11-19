import React from "react";
import FooterItem from "./footerElement";

const Footer = () => {
  const items = [];
  const menus = [
    "법적고지",
    "이메일무단수집거부",
    "이용약관",
    "개인정보취급방침",
    "고객센터",
    "입찰공고",
  ];
  for (let num = 0; num < 2 * menus.length - 1; num++)
    if (num % 2 === 1) items.push(<FooterItem data="|" index={num} />);
    else items.push(<FooterItem data={menus[num / 2]} index={num} />);
  return (
    <div id="Footer">
      <ul>{items}</ul>
    </div>
  );
};

export default Footer;
