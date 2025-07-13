interface MajorCredits {
    credits: number;
    brand: 'major';
  }
  
  interface MinorCredits {
    credits: number;
    brand: 'minor';
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'major'
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'minor'
    };
  }
  
  // Example usage
  const math: MajorCredits = { credits: 3, brand: 'major' };
  const physics: MajorCredits = { credits: 4, brand: 'major' };
  const combinedMajor = sumMajorCredits(math, physics);
  console.log(combinedMajor); // { credits: 7, brand: 'major' }
  
  const art: MinorCredits = { credits: 1, brand: 'minor' };
  const music: MinorCredits = { credits: 2, brand: 'minor' };
  const combinedMinor = sumMinorCredits(art, music);
  console.log(combinedMinor); // { credits: 3, brand: 'minor' }
  