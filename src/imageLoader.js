export const importAllImages = (context) => {
    const images = {};
    context.keys().forEach((item) => {
      images[item.replace('./', '')] = context(item);
    });
    return images;
  };