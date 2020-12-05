const componentMap = {
  hero: () => import('./Hero'),
  cta: () => import('./CallToAction/CallToAction'),
  // that's 'personalized hero' to you, sir.
  '3zPkEj1KqeSn4QdsdnNKO3': () => import('./PersonalizedHero'),
  talksList: () => import('./TalkList/TalkList'),
  registrationForm: () => import('./RegisterForm'),
  whyAttend: () => import('./WhyAttend'),
};

export function componentResolver(variantType) {
  const component = componentMap[variantType];
  if (!component) {
    // eslint-disable-next-line no-console
    console.warn(`Component for variantType '${variantType}' could not be resolved.`);
  }
  return component;
}
