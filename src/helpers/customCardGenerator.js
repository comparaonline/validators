const generateHipercard = () => {
  const hipercard = [
    {
      vcc: '6062824871327768',
      validade: '02/12/2018',
      seguranca: '574'
    },
    {
      vcc: '6062824163142818',
      validade: '02/11/2017',
      seguranca: '936'
    },
    {
      vcc: '6062821641124699',
      validade: '02/09/2018',
      seguranca: '305'
    },
    {
      vcc: '6062828325558233',
      validade: '02/05/2018',
      seguranca: '991'
    },
    {
      vcc: '6062822758073364',
      validade: '02/12/2018',
      seguranca: '135'
    },
    {
      vcc: '6062823817930495',
      validade: '02/07/2018',
      seguranca: '449'
    },
    {
      vcc: '6062827739384111',
      validade: '02/09/2018',
      seguranca: '956'
    },
    {
      vcc: '6062826451369698',
      validade: '02/02/2018',
      seguranca: '561'
    },
    {
      vcc: '6062821332035170',
      validade: '02/12/2017',
      seguranca: '816'
    },
    {
      vcc: '6062821535463989',
      validade: '02/04/2018',
      seguranca: '555'
    },
    {
      vcc: '6062827318077706',
      validade: '02/02/2018',
      seguranca: '805'
    },
    {
      vcc: '6062820640453968',
      validade: '02/05/2018',
      seguranca: '398'
    },
    {
      vcc: '6062821576967633',
      validade: '02/02/2018',
      seguranca: '628'
    },
    {
      vcc: '6062826058956723',
      validade: '02/11/2018',
      seguranca: '515'
    },
    {
      vcc: '6062825329365664',
      validade: '02/03/2019',
      seguranca: '550'
    }
  ];
  const random = hipercard[Math.floor(Math.random() * hipercard.length)];
  return random;
};

const eloCards = [
  {
    vcc: '6363683870087914',
    validade: '02/12/2018',
    seguranca: '574'
  },
  {
    vcc: '6363681668285310',
    validade: '02/09/2018',
    seguranca: '738'
  },
  {
    vcc: '4389351499312197',
    validade: '02/05/2018',
    seguranca: '259'
  },
  {
    vcc: '6362974246458124',
    validade: '02/12/2018',
    seguranca: '144'
  },
  {
    vcc: '5041752826941847',
    validade: '02/07/2018',
    seguranca: '533'
  },
  {
    vcc: '4389356690388722',
    validade: '02/09/2018',
    seguranca: '106'
  },
  {
    vcc: '6363681957870517',
    validade: '02/02/2018',
    seguranca: '287'
  },
  {
    vcc: '6363688944896737',
    validade: '02/12/2017',
    seguranca: '168'
  },
  {
    vcc: '6363687077116087',
    validade: '02/04/2018',
    seguranca: '228'
  },
  {
    vcc: '4389359175949158',
    validade: '02/02/2018',
    seguranca: '245'
  },
  {
    vcc: '6362975541469369',
    validade: '02/05/2018',
    seguranca: '898'
  },
  {
    vcc: '5041751278279920',
    validade: '02/02/2018',
    seguranca: '724'
  },
  {
    vcc: '5041750919978528',
    validade: '02/11/2018',
    seguranca: '924'
  },
  {
    vcc: '6362970523845520',
    validade: '02/03/2019',
    seguranca: '433'
  },
  {
    vcc: '6516536000780145',
    validade: '02/03/2019',
    seguranca: '433'
  }
];

const generateEloCard = () => {
  const random = eloCards[Math.floor(Math.random() * eloCards.length)];
  return random;
};

export default {
  eloCards,
  generateHipercard,
  generateEloCard
};
