const colorPalette = document.querySelectorAll('.choose_color span')
let root = document.querySelector(':root');


const changeActiveColor = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primaries colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {

        changeActiveColor();
        if(color.classList.contains('color_1')){
            newFirstColorHue = 252,
            newSecondColorHue = '75%',
            newThirdColorHue = '60%';
            
        } else if(color.classList.contains('color_2')){
            newFirstColorHue = 252;
            newSecondColorHue = '30%',
            newThirdColorHue = '17%';
        } else if(color.classList.contains('color_3')){
            newFirstColorHue = 352;
            newSecondColorHue = '81%',
            newThirdColorHue = '50%';
        } else if(color.classList.contains('color_4')){
            newFirstColorHue = 140;
            newSecondColorHue = '87%',
            newThirdColorHue = '37%';
        }  else if(color.classList.contains('color_5')){
            newFirstColorHue = 280;
            newSecondColorHue = '49%',
            newThirdColorHue = '42%';
        }

        color.classList.add('active');

        setTimeout(() => {

            root.style.setProperty('--newFirstColorHue', newFirstColorHue);
            root.style.setProperty('--newSecondColorHue', newSecondColorHue);
            root.style.setProperty('--newThirdColorHue', newThirdColorHue);
        }, 350);
    })
});