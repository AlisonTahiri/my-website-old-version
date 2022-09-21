export type Language = {
  id: number;
  src: string;
  name: string;
  alt: string;
  stars: number;
};

export type ProjectsData = {
  url: string;
  content: string;
  logoAlt: string;
  src: string;
  logoWidth: string;
  tags: string[];
};

export type Article = {
  id: string;

  attributes: {
    title: string;
    content: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    slug: string;
    category: {
      data: {
        id: string;
        attributes: {
          slug: string;
        };
      };
    };
    image: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: string;
              width: string;
              height: string;
              caption: string;
            };
            small: {
              url: string;
              width: string;
              height: string;
              caption: string;
            };
            medium: {
              url: string;
              width: string;
              height: string;
              caption: string;
            };
          };
        };
      };
    };
    author: {
      data: {
        id: string;
        attributes: {
          name: string;
          email: string;
          picture: {
            data: {
              attributes: {
                formats: {
                  thumbnail: {
                    url: string;
                    width: string;
                    height: string;
                    caption: string;
                  };
                  small: {
                    url: string;
                    width: string;
                    height: string;
                    caption: string;
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};
