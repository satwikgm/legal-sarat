client22@gmail.com -> client22@gmail.com
lawyer22@gmail.com -> lawyer22@gmail.com


graph TD;
  A[Legal Matter Initiated]
  B[Consult with a Lawyer]
  C[Legal Advice]
  D[Consider Legal Options]
  E[Mediation / Negotiation]
  F[Settlement Reached?]
  G[File a Legal Complaint]
  H[Notify the Opposing Party]
  I[Response from Opposing Party]
  J[Pre-trial Proceedings]
  K[Evidence Gathering]
  L[Case Analysis]
  M[Preparation for Trial]
  N[Trial]
  O[Judgment]
  P[Appeal Process]
  Q[End of Legal Process]
  
  A --> B
  B --> C
  C --> D
  D -->|No| E
  D -->|Yes| Q
  E --> F
  F -->|Yes| Q
  F -->|No| G
  G --> H
  H --> I
  I -->|No| J
  I -->|Yes| Q
  J --> K
  K --> L
  L --> M
  M --> N
  N --> O
  O --> P
  P -->|No| Q
  P -->|Yes| N