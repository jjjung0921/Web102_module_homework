import Box from 'main_module';

export const IconBox = () => {
    let boxes = [];
    for(let i=1; i<5; i++) boxes.push(<Box index={i}/>);

   return(
    <div id='icon_box'>
        {boxes}
    </div>
   );
};