import { FormWrapper, ImageWithQuote, ChessExperienceForm } from 'components';

const ChessExperience = () => {
  return (
    <>
      <ImageWithQuote
        imageSrc='/assets/chess-experience.png'
        quoteLineOne='"this quote'
        quoteLineTwo=' is dumb"'
        quoteAuthor='- Siegbert tarrasch'
        quoteAuthorAlignClass='self-rigtt'
        quoteMarginTopClass='mt-44'
      />
      <FormWrapper
        headerText='First Step Is Done, Continue To Finish Onboarding'
        pageName='Chess experience'
        pageDescription='This is basic information field'
        currentStep={2}
      >
        <ChessExperienceForm />
      </FormWrapper>
    </>
  );
};

export default ChessExperience;
