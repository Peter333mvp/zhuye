// @ts-ignore;
import React from 'react';

import { Navigation, HeroSection, SkillsSection, ProjectsSection, ExperienceSection, ContactSection, Footer } from '@/components';
export default function PersonalWebsite(props) {
  const {
    style
  } = props;
  return <div style={style} className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>;
}