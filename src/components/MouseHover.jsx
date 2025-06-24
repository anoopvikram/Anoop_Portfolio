import { useCallback } from "react";

function MouseHover() {
  const showPreview = useCallback((hoverimage) => {
    const preview = document.getElementById("cursor-preview");
    preview.style.backgroundImage = `url(${hoverimage})`;
    preview.style.opacity = 1;
  }, []);

  const movePreview = useCallback((e) => {
  const preview = document.getElementById("cursor-preview");
  const previewWidth = preview.offsetWidth;
  const x = e.clientX - previewWidth / 3;
  const y = e.clientY + 20;
  preview.style.top = `${y}px`;
  preview.style.left = `${x}px`;
}, []);


  const hidePreview = useCallback(() => {
    const preview = document.getElementById("cursor-preview");
    preview.style.opacity = 0;
  }, []);

  return { showPreview, movePreview, hidePreview };
}

export default MouseHover;
