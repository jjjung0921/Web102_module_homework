import { image } from "../../image";

export const Chef = () => {
  return (
    <div id="chef">
      <div class="content">
        <div class="discription">
          <strong>Title</strong><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div class="image">
          <img src={image('chef')} />
        </div>
      </div>
    </div>
  );
};
