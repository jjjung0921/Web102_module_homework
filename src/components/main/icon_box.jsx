import Box from "main_module";
import { image } from "../../image";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const boxes = [1, 2, 3, 4];

export const IconBox = () => {

    return(
        <div id="icon_box">
            {boxes.map((i) => (
                <Box 
                    key={i} 
                    image={image(`icon${i}`)} 
                    text={text} 
                />
            ))}
        </div>
    );
};