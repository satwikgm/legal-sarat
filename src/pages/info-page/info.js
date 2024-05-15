import React from 'react';

const Info = () => {
  const lawsData = [
    {
      title: 'Criminal Law',
      description:
        'Criminal law in India is a vital component of the legal system. It encompasses a wide range of offenses, from petty theft to heinous crimes like murder. The primary purpose of criminal law is to maintain public order, protect citizens, and ensure justice. It defines various criminal offenses, their elements, and the penalties associated with them. Criminal trials are conducted in accordance with established procedures, and individuals accused of crimes are afforded the right to a fair trial and legal representation. Criminal law is designed to balance the rights of the accused with the interests of society in preventing and punishing criminal conduct.',
    },
    {
      title: 'Civil Law',
      description:
        'Civil law plays a pivotal role in resolving disputes between individuals, organizations, or entities. It encompasses a wide range of legal areas, including contract law, property law, family law, and more. Civil law cases are typically initiated by private parties seeking redress for perceived wrongs, and the remedies often involve financial compensation or specific performance rather than criminal penalties. Family law, a subset of civil law, deals with matters such as divorce, child custody, adoption, and marriage. Civil law is essential for maintaining social harmony and protecting individuals\' rights and interests.',
    },
    {
      title: 'Family Law',
      description:
        'Family law in India is a multifaceted legal domain that governs familial relationships, domestic matters, and marital disputes. It covers a wide range of issues, including marriage, divorce, child custody, adoption, and inheritance. Family courts are responsible for adjudicating disputes and ensuring that the rights of family members are upheld. Family law is designed to provide legal mechanisms for resolving conflicts within families while safeguarding the well-being of children and vulnerable family members. It also addresses issues related to maintenance, alimony, and property division during divorce proceedings. Family law is instrumental in preserving the stability and harmony of Indian households.',
    },
    {
      title: 'Constitutional Law',
      description:
        'Constitutional law in India is the bedrock of the nation\'s legal framework. It encompasses the study and interpretation of the Indian Constitution, which serves as the supreme law of the land. Constitutional law defines the structure of the government, the distribution of powers among various institutions, and the fundamental rights and duties of citizens. It also establishes the principles of democracy, equality, and justice. Constitutional law plays a pivotal role in safeguarding the rights of citizens and ensuring that government actions comply with constitutional provisions. The Indian judiciary, particularly the Supreme Court, plays a crucial role in interpreting and upholding the constitutionality of laws and government actions.',
    },
    {
      title: 'Environmental Law',
      description:
        'Environmental law in India is dedicated to the preservation, protection, and sustainable management of the environment and natural resources. It addresses critical issues such as pollution control, wildlife conservation, forest protection, and climate change mitigation. Environmental regulations are instrumental in maintaining ecological balance and preventing harm to the environment. India has a rich body of environmental legislation and policies aimed at safeguarding its diverse ecosystems. These laws set standards for industrial emissions, waste management, and the conservation of endangered species. Environmental law plays a vital role in ensuring that development is carried out responsibly, with due consideration for environmental sustainability.',
    },
    {
      title: 'Intellectual Property Law',
      description:
        'Intellectual property law in India focuses on the protection of intellectual creations and innovations. It encompasses a variety of legal areas, including patents, trademarks, copyrights, and trade secrets. Intellectual property rights grant creators and inventors exclusive ownership of their intellectual creations for a specified period. This protection encourages innovation and creativity in various fields, such as science, technology, arts, and commerce. Patent law protects new inventions, while trademark law safeguards brand identities. Copyright law applies to literary, artistic, and musical works. Trade secret law protects confidential business information. Intellectual property law is instrumental in promoting innovation, entrepreneurship, and economic growth in India.',
    },
    {
      title: 'Labor and Employment Law',
      description:
        'Labor and employment law in India governs the relationship between employers and employees. It encompasses a wide range of legal areas, including employment contracts, wages, working conditions, industrial disputes, and social security. These laws protect the rights and interests of workers and provide mechanisms for resolving workplace conflicts. Labor law establishes minimum wage standards, regulates working hours, and ensures safe working conditions. It also addresses issues such as employee benefits, termination, and trade unions. Employment laws in India play a crucial role in promoting fair labor practices, social justice, and worker welfare.',
    },
    {
      title: 'Taxation Law',
      description:
        'Taxation law in India is essential for the collection and regulation of taxes imposed by the government. It encompasses various taxes, including income tax, goods and services tax (GST), and corporate tax. Tax laws define the procedures for tax assessment, payment, and compliance. They also establish tax rates, exemptions, and deductions. Taxation is a significant source of government revenue and plays a vital role in funding public services and infrastructure development. Taxation law ensures that individuals and businesses fulfill their tax obligations and contribute to the nation\'s economic growth.',
    },
    {
      title: 'Cyber Law',
      description:
        'Cyber law in India addresses legal issues related to the use of computers, the internet, and digital technology. It encompasses a wide range of cybercrimes and cybersecurity measures. Cyber laws aim to combat offenses such as hacking, online fraud, data breaches, and cyberbullying. They provide legal frameworks for investigating and prosecuting cybercriminals. Cybersecurity laws promote the protection of sensitive data and the security of digital infrastructure. As technology continues to advance, cyber law plays a crucial role in maintaining trust and security in the digital realm.',
    },
    {
      title: 'Administrative Law',
      description:
        'Administrative law defines the roles, powers, and functions of government agencies and their interactions with citizens. It ensures transparency, accountability, and fairness in administrative actions. Administrative law governs areas such as public administration, regulatory bodies, and administrative tribunals. It sets standards for decision-making processes, procedural fairness, and the right to appeal administrative decisions. Administrative law plays a critical role in preventing abuse of power, protecting citizens\' rights, and upholding the rule of law. It enables individuals to challenge government actions that may be unjust or unlawful.',
    },
  ];

  // return (
  //   <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
  //     <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Types of Laws in India</h1>
  //     <ul style={{ listStyleType: 'none', padding: 0 }}>
  //       {lawsData.map((law, index) => (
  //         <li key={index} style={{ marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
  //           <h2 style={{ color: '#007bff', marginBottom: '10px' }}>{law.title}</h2>
  //           <p>{law.description}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#555', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'gold' }}>Types of Laws in India</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {lawsData.map((law, index) => (
          <li key={index} style={{ marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <h2 style={{ color: '#343a40', marginBottom: '10px' }}>{law.title}</h2>
            <p>{law.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default Info;
