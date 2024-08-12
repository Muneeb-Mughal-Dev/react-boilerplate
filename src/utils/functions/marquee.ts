export const marqueeAnimation = () => {
  const marquees: NodeListOf<Element> = document.querySelectorAll(".marquee");
  marquees.forEach((marquee: Element) => {
    marquee.setAttribute("data-animated", "true");
    const marqueeInner: Element | null =
      marquee.querySelector(".marquee_inner");
    if (marqueeInner) {
      const marqueeContent: Element[] = Array.from(marqueeInner.children);
      marqueeContent.forEach((item: Element) => {
        const duplicatedItem: Node | null = item.cloneNode(true);
        if (duplicatedItem) {
          (duplicatedItem as Element).setAttribute("aria-hidden", "true");
          if (marqueeInner) {
            marqueeInner.appendChild(duplicatedItem);
          }
        }
      });
    }
  });
};
