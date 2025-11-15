window.addEventListener('DOMContentLoaded', function() {
  const kpiData = {
    "2020": {
      co2: "585,700 tonn",
      renewable: "85%",
      rifiuti: "144,900 tonn",
      riciclo: "91%",
      dipendenti: "38,400",
      donne_manager: "34%",
      formazione: "280,000 ore",
      ltifr: "1.1",
      donne_cda: "36%"
    },
    "2021": {
      co2: "563,700 tonn",
      renewable: "87%",
      rifiuti: "137,500 tonn",
      riciclo: "92%",
      dipendenti: "37,800",
      donne_manager: "36%",
      formazione: "290,000 ore",
      ltifr: "1.0",
      donne_cda: "36%"
    },
    "2022": {
      co2: "558,900 tonn",
      renewable: "92%",
      rifiuti: "129,800 tonn",
      riciclo: "93%",
      dipendenti: "38,500",
      donne_manager: "38%",
      formazione: "310,000 ore",
      ltifr: "0.9",
      donne_cda: "38%"
    },
    "2023": {
      co2: "542,300 tonn",
      renewable: "93%",
      rifiuti: "126,500 tonn",
      riciclo: "94%",
      dipendenti: "38,900",
      donne_manager: "39%",
      formazione: "315,000 ore",
      ltifr: "0.8",
      donne_cda: "40%"
    },
    "2024": {
      co2: "530,400 tonn",
      renewable: "95%",
      rifiuti: "120,300 tonn",
      riciclo: "95%",
      dipendenti: "39,200",
      donne_manager: "40%",
      formazione: "320,000 ore",
      ltifr: "0.7",
      donne_cda: "42%"
    }
  };

  const downloadDocs = {
    "2024": [
      {
        titolo: "Sustainability Report 2024",
        descrizione: "Relazione ufficiale Ferrero. KPI e politiche ambientali, sociali, di governance.",
        url: "https://www.ferrero.com/int/sites/ferrero_int/files/2025-07/ferrero-group-2024-sustainability-report.pdf"
      },
	  {
        titolo: "Sustainability Report 2024",
        descrizione: "GRI Content Index",
        url: "https://www.ferrero.com/int/sites/ferrero_int/files/2025-07/nuovaferrero-2024-gri-content-index-final.pdf"
      }
    ],
    "2023": [
      {
        titolo: "Sustainability Report 2023",
         descrizione: "Relazione ufficiale Ferrero. KPI e politiche ambientali, sociali, di governance.",
        url: "https://www.ferrero.com/int/sites/ferrero_int/files/2024-05/ferrero_csr_final_28524.pdf"
      },
	  {
        titolo: "Sustainability Report 2023",
        descrizione: "GRI Content Index",
        url: "https://www.ferrero.com/int/sites/ferrero_int/files/2024-05/ferrero_gri-index_240524_v2.pdf"
      }
    ],
    "2022": [
      {
        titolo: "Sustainability Report 2022",
         descrizione: "Relazione ufficiale Ferrero. KPI e politiche ambientali, sociali, di governance.",
        url: "https://www.ferrero.com/int/sites/ferrero_int/files/2023-10/ferrero-sr22_230621.pdf"
      },
	  {
        titolo: "Sustainability Report 2022",
        descrizione: "GRI Content Index",
        url: "https://www.ferrero.com/int/sites/ferrero_int/files/2023-07/ferrero_gri_context_230621_v3.pdf"
      }
    ],
    "2021": [
      {
        titolo: "Sustainability Report 2021",
         descrizione: "Relazione ufficiale Ferrero. KPI e politiche ambientali, sociali, di governance.",
        url: "https://www.ferrero.com/int/sites/ferrero_int/files/2023-05/ferrero_book_1307_interactive-compressed-1.pdf"
      },
	  {
        titolo: "Sustainability Report 2021",
        descrizione: "GRI Content Index",
        url: "https://www.ferrero.com/int/sites/ferrero_int/files/2023-05/report2021_gri_0.pdf"
      }
    ],
    "2020": [
      {
        titolo: "Sustainability Report 2020",
         descrizione: "Relazione ufficiale Ferrero. KPI e politiche ambientali, sociali, di governance.",
        url: "https://www.ferrero.com/int/sites/ferrero_int/files/2023-05/report.pdf"
      },
	  {
        titolo: "Sustainability Report 2020",
        descrizione: "GRI Content Index",
        url: "https://www.ferrero.com/int/sites/ferrero_int/files/2023-05/gri-content-index.pdf"
      }
    ]
  };

  const slider = document.getElementById('year-slider');
  const kpiFields = [
    "co2", "renewable", "rifiuti", "riciclo", "dipendenti", "donne_manager",
    "formazione", "ltifr", "donne_cda"
  ];

  updateDashboard(slider.value);

  slider.addEventListener('input', function() {
    updateDashboard(this.value);
  });

  function updateDashboard(year) {
    document.getElementById('selected-year').textContent = year;
    const dati = kpiData[year];
    if (dati) {
      kpiFields.forEach(kpi => {
        const el = document.getElementById(kpi);
        if (el) el.textContent = (dati[kpi] !== undefined && dati[kpi] !== null) ? dati[kpi] : "ND";
      });
    } else {
      kpiFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '--';
      });
    }
    updateDownloadSection(year);
  }

  function updateDownloadSection(year) {
    const downloadList = document.getElementById('download-list');
    downloadList.innerHTML = '';
    const docs = downloadDocs[year];
    if (docs && docs.length > 0) {
      docs.forEach(doc => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${doc.titolo}</strong> – <span>${doc.descrizione}</span>
          <a href="${doc.url}" target="_blank" class="download-btn">Scarica PDF</a>`;
        downloadList.appendChild(li);
      });
    } else {
      downloadList.innerHTML = '<li>Nessun report disponibile per questo anno.</li>';
    }
  }
});
