const profileData = {
  title: "Data Personal",
  fields: [
    { label: "Nama", value: "Ferdian Firmansyah" },
    { label: "Tempat, Tanggal Lahir", value: "Banyuwangi, 04 Februari 2003" },
    { label: "Jenis Kelamin", value: "Laki-Laki" },
    { label: "Agama", value: "Islam" },
    { label: "Tinggi & Berat Badan", value: "177 Cm & 53 Kg" },
    {
      label: "Alamat",
      value: "JL Bunyu No 29, Banyuwangi, Jawa Timur, Indonesia",
    },
  ],
};

const skillData = [
  { skill: "Microsoft Office", percentage: 70 },
  { skill: "Kemampuan analisis", percentage: 85 },
];

const experienceData = [
  {
    period: "Juni 2018 - September 2019",
    organization: "Organisasi SMA",
    role: "Palang Merah Remaja",
    description: `Pada periode Juni 2018 hingga September 2019, saya aktif terlibat dalam organisasi Palang Merah Remaja di SMA. Organisasi ini memiliki peran penting dalam kegiatan sosial dan kemanusiaan di lingkungan sekolah. Selama menjadi anggota, saya bertugas untuk mengikuti upacara pada setiap hari Senin dan memastikan kelancaran jalannya acara. Selain itu, saya juga berpartisipasi dalam pengorganisasian berbagai kegiatan, termasuk menjadi panitia pelatihan dan pendidikan dasar (diklat) untuk anggota baru. Salah satu peran penting yang saya emban dalam masa pelatihan adalah menjadi pengurus kelengkapan peralatan, yang bertanggung jawab atas penyediaan dan pengelolaan alat-alat yang digunakan dalam setiap kegiatan. Pengalaman ini memperkaya kemampuan organisasi, kepemimpinan, serta keterampilan dalam bekerja dalam tim.`,
  },
  {
    period: "Juli 2015 - Juni 2016",
    organization: "Organisasi SMP",
    role: "Dewan Penggalang",
    description: `Pada periode Juli 2015 hingga Juni 2016, saya bergabung dengan Dewan Penggalang di SMP, sebuah organisasi yang berfokus pada kegiatan kepramukaan. Dalam organisasi ini, saya menjabat sebagai pengurus pramuka selama setahun penuh. Saya terlibat dalam berbagai kegiatan yang berfokus pada pengembangan karakter, kedisiplinan, dan kemampuan baris-berbaris. Selain itu, saya juga mempelajari berbagai materi kepramukaan yang meliputi keterampilan bertahan hidup, pertolongan pertama, serta kerja sama tim dalam situasi yang menantang. Pengalaman ini memberikan dasar yang kuat dalam pembentukan karakter saya, yang sangat berguna dalam kehidupan pribadi maupun profesional di masa depan.`,
  },
];

const educationData = [
  {
    period: "2018 - 2020",
    level: "MIPA",
    institution: "SMA Negeri 1 Banyuwangi",
    description: `Pada periode 2018 hingga 2020, saya melanjutkan pendidikan di SMA Negeri 1 Banyuwangi dengan memilih jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA). Selama bersekolah di sana, saya berhasil menyelesaikan program akselerasi, yang memungkinkan saya untuk menyelesaikan studi dalam waktu dua tahun. Di samping itu, saya juga terlibat dalam berbagai kegiatan ekstrakurikuler yang memperkaya pengalaman saya di bidang akademik dan non-akademik. Prestasi ini merupakan pencapaian yang membanggakan dan menjadi landasan bagi perkembangan akademik saya selanjutnya.`,
  },
  {
    period: "2015 - 2018",
    level: "Umum",
    institution: "SMP Negeri 1 Giri",
    description: `Saya menempuh pendidikan di SMP Negeri 1 Giri pada periode 2015 hingga 2018. Selama bersekolah di sana, saya aktif dalam berbagai kegiatan dan menunjukkan dedikasi yang tinggi terhadap studi saya. Salah satu pencapaian terbaik saya adalah berhasil masuk dalam sepuluh besar di kelas, yang menjadi bukti kemampuan akademik saya. Selain itu, saya juga terlibat dalam sejumlah kegiatan ekstrakurikuler yang membantu mengembangkan keterampilan sosial dan kepemimpinan saya, serta memperluas wawasan di luar bidang akademik.`,
  },
  {
    period: "2009 - 2015",
    level: "Dasar",
    institution: "SD Negeri 1 Lateng",
    description: `Pada periode 2009 hingga 2015, saya bersekolah di SD Negeri 1 Lateng. Selama masa pendidikan dasar ini, saya memperoleh berbagai pengalaman yang membentuk karakter dan dasar pengetahuan saya. Saya berhasil meraih peringkat tiga teratas di kelas selama hampir seluruh masa pendidikan saya, yang mencerminkan kedisiplinan dan tekad saya dalam belajar. Pengalaman di SD Negeri 1 Lateng juga mengajarkan saya pentingnya kerja keras, kerjasama, serta sikap tanggung jawab yang menjadi modal penting dalam kehidupan saya selanjutnya.`,
  },
];

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 50;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      navLinks.forEach((link) => link.classList.remove("fw-bold"));
      navLinks[index].classList.add("fw-bold");
    }
  });
});

const createElement = (tag, className = "", content = "", isHTML = false) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (isHTML) {
    element.innerHTML = content;
  } else {
    element.textContent = content;
  }
  return element;
};

const createProfileCard = (containerId, profile) => {
  const container = document.getElementById(containerId);
  if (!container)
    return console.error(`Container with ID '${containerId}' not found.`);

  const cardBody = createElement("div", "card-body");
  cardBody.appendChild(createElement("div", "h4 mt-0 title", profile.title));

  profile.fields.forEach(({ label, value }) => {
    const row = createElement("div", "row mt-3");
    row.appendChild(
      createElement(
        "div",
        "col-sm-5",
        `<strong class='text-uppercase'>${label}</strong>`,
        true
      )
    );
    row.appendChild(createElement("div", "col-sm-7", value));
    cardBody.appendChild(row);
  });

  container.appendChild(cardBody);
};

const createSkillProfile = (containerId, skills) => {
  const container = document.getElementById(containerId);
  if (!container)
    return console.error(`Container with ID '${containerId}' not found.`);

  const cardBody = createElement("div", "card-body");
  const row = createElement("div", "row");

  skills.forEach(({ skill, percentage }) => {
    const col = createElement("div", "col-md-6");
    const progressContainer = createElement(
      "div",
      "progress-container progress-primary"
    );
    progressContainer.appendChild(
      createElement("span", "progress-badge", skill)
    );

    const progress = createElement("div", "progress");
    const progressBar = createElement(
      "div",
      "progress-bar progress-bar-primary",
      "",
      true
    );
    progressBar.setAttribute("data-aos", "progress-full");
    progressBar.setAttribute("data-aos-offset", "10");
    progressBar.setAttribute("data-aos-duration", "2000");
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuenow", percentage);
    progressBar.setAttribute("aria-valuemin", "0");
    progressBar.setAttribute("aria-valuemax", "100");
    progressBar.style.width = `${percentage}%`;

    const progressValue = createElement(
      "span",
      "progress-value",
      `${percentage}%`
    );

    progress.appendChild(progressBar);
    progress.appendChild(progressValue);
    progressContainer.appendChild(progress);
    col.appendChild(progressContainer);
    row.appendChild(col);
  });

  cardBody.appendChild(row);
  container.appendChild(cardBody);
};

const createDescriptionHandleCards = (containerId, data, type) => {
  const container = document.getElementById(containerId);
  if (!container)
    return console.error(`Container with ID '${containerId}' not found.`);

  data.forEach((item) => {
    const card = createElement("div", "card");
    const row = createElement("div", "row");

    const colLeft = createElement("div", "col-md-3 bg-primary", "", true);
    colLeft.setAttribute("data-aos", "fade-right");
    colLeft.setAttribute("data-aos-offset", "50");
    colLeft.setAttribute("data-aos-duration", "500");

    // Menambahkan kedua class: card-body dan class khusus (experience atau education)
    const headerBody = createElement("div", "card-body");
    headerBody.classList.add(
      type === "experience" ? "cc-experience-header" : "cc-education-header"
    );
    headerBody.appendChild(createElement("p", "", item.period));

    const title = type === "experience" ? item.organization : item.level;
    headerBody.appendChild(createElement("div", "h5", title));
    colLeft.appendChild(headerBody);

    const colRight = createElement("div", "col-md-9", "", true);
    colRight.setAttribute("data-aos", "fade-left");
    colRight.setAttribute("data-aos-offset", "50");
    colRight.setAttribute("data-aos-duration", "500");

    const body = createElement("div", "card-body");

    if (type === "experience") {
      body.appendChild(createElement("h5", "", item.role));
    } else {
      body.appendChild(createElement("p", "category", item.institution));
    }

    const descriptionElement = createElement("p", "", item.description);
    descriptionElement.style.textAlign = "justify";
    body.appendChild(descriptionElement);
    colRight.appendChild(body);

    row.appendChild(colLeft);
    row.appendChild(colRight);
    card.appendChild(row);
    container.appendChild(card);
  });
};

// render the about profile section
createProfileCard("about-profile", profileData);

// render the skill profile section
createSkillProfile("skill-profile", skillData);

// render the experience profile section
createDescriptionHandleCards(
  "experience-profile",
  experienceData,
  "experience"
);

// render the education profile section
createDescriptionHandleCards("education-profile", educationData);
