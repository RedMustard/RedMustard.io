
// https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily/4770179#4770179
const preventDefault = (e: Event) => {
    e.preventDefault();
};

export const disableScroll = () => {
    window.addEventListener('mousewheel', preventDefault, { passive: false });
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
};

export const enableScroll = () => {
    window.removeEventListener('mousewheel', preventDefault, false);
    window.removeEventListener('wheel', preventDefault, false);
    window.removeEventListener('touchmove', preventDefault, false);
};
