import {
  FormWrapper,
  ImageWithQuote,
  PersonalInformationForm,
} from 'components';

const ChessExperience = () => {
  return (
    <>
      <ImageWithQuote
        imageSrc='/assets/personal-information.png'
        quoteLineOne='"when u see a good move,'
        quoteLineTwo=' look for a better one"'
        quoteAuthor='- emanuel lasker'
        quoteAuthorAlignClass='self-left'
        quoteMarginTopClass='mt-40'
      />
      <FormWrapper
        headerText='Start creating your account'
        pageName='Personal information'
        pageDescription='This is basic information field'
        currentStep={2}
      >
      </FormWrapper>
    </>
  );
};

export default ChessExperience;
