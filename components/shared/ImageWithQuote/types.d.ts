type imageExtensions = 'jpg' | 'png' | 'gif' | 'wbpm';

export type PropsType = {
  quoteLineOne: `"${string}`;
  quoteLineTwo: `${string}"`;
  imageSrc: `/assets/${string}.${imageExtensions}`;
  quoteAuthor: `- ${string} ${string}`;
  quoteAuthorAlignClass: string;
  quoteMarginTopClass: `mt-${number}`;
};
