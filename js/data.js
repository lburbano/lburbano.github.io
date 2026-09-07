// Edit the arrays below to update your site. No build step needed —
// just save this file and refresh index.html.

// Your name exactly as it appears in author lists, so it can be bolded
// automatically in the Selected Papers section below.
const MY_NAME = "L. Burbano";

// Education — newest/highest degree first.
const EDUCATION = [
  { degree: "Ph.D. in Computer Science and Engineering", school: "University of California, Santa Cruz", year: "2026" },
  { degree: "M.S. in Computer Science and Engineering", school: "University of California, Santa Cruz", year: "2025" },
  { degree: "M.S. in Electronics and Computer Engineering", school: "Universidad de los Andes, Colombia", year: "2019" },
  { degree: "B.S. in Electronics Engineering", school: "Universidad de los Andes, Colombia", year: "2017" },
];

// News items — newest first. `date` is just a display string.
const NEWS = [
  { date: "Jun 2026", text: "I received the UCSC CSE Excellent Ph.D. Award." },
  { date: "Jun 2026", text: 'I defended my thesis, "Security of Autonomous Decision-making Agents: From Control Systems to Embodied AI."' },
  { date: "Dec 2025", text: 'Our paper, "CHAI: Command Hijacking against Embodied AI," was accepted at SaTML.' },
  { date: "Dec 2025", text: 'Our paper, "BADControl: Backdoor Attacks against Control Systems," was accepted at USENIX Security.' },
];

// Selected papers — newest first. `links` entries render as small links
// after the venue line; omit any you don't have (e.g. no `code` yet).
const PAPERS = [
  {
    title: "CHAI: Command Hijacking against Embodied AI",
    authors: "L. Burbano, D. Ortiz, Q. Sun, S. Yang, C. Xie, Y. Cao, A. A. Cardenas",
    venue: "IEEE SaTML, 2026",
    links: { pdf: "https://arxiv.org/pdf/2510.00181", code: "https://github.com/Cyphysecurity/chai" },
  },
  {
    title: "BADControl: Backdoor Attacks against Control Systems",
    authors: "L. Burbano, H. Sasahara, R. Song, Z. B. Celik, A. A. Cardenas",
    venue: "USENIX Security, 2026",
    links: { pdf: "https://www.usenix.org/system/files/conference/usenixsecurity26/sec26_prepub_burbano.pdf", code: "https://zenodo.org/records/17932677" },
  },
  {
    title: "Fast Attack Recovery for Stochastic Cyber-Physical Systems",
    authors: "L. Zhang*, L. Burbano*, X. Chen, A. A. Cardenas, S. Drager, M. Anderson, and F. Kong",
    venue: "IEEE RTAS, 2024",
    links: { pdf: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10568053" },
  },
  {
    title: "You Make Me Tremble: A First Look at Attacks Against Structural Control Systems",
    authors: "A. Zambrano, A. Palacio-Betancur, L. Burbano, A. F. Niño, L. F. Giraldo, M. Gutierrez-Soto, J. Giraldo, and A. A. Cardenas",
    venue: "CCS, 2021",
    links: { pdf: "https://dl.acm.org/doi/pdf/10.1145/3460120.3485386" },
  },
];
