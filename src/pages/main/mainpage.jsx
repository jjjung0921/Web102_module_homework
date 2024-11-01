import { Header } from "../../components/main/header";
import { Mainimage } from "../../components/main/main_picture";
import { IconTitle } from "../../components/main/icon_title";
import "./mainpage.scss";
import { IconBox } from "../../components/main/icon_box";
import { Chef } from "../../components/main/chef";


export const Mainpage = () => {
  return (
    <>
      <Header />
      <Mainimage />
      <IconTitle />
      <IconBox />
      <Chef/>
    </>
  );
};
