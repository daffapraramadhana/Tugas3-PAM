const Bandara = {
    CGK : {
        bandara_kode : 'CGK',
        bandara_nama : 'Bandara Internasional Soekarno-Hatta'
    },
    PDG : {
        bandara_kode : 'PDG',
        bandara_nama : 'Bandara Internasional Minangkabau'
    },
    TKG : {
        bandara_kode : 'TKG',
        bandara_nama : 'Bandara Internasional Raden Inten II'
    }
  };
  
  const Maskapai = {
    SJY : {
        maskapai_id : 'SJY',
        maskapai_nama : 'Sriwijaya Air',
        maskapai_logo : 'Sriwijaya'
    },
    GIA : {
        maskapai_id : 'GIA',
        maskapai_nama : 'Garuda Indonesia',
        maskapai_logo : 'Indonesia'
    },
    LNI : {
        maskapai_id : 'LNI',
        maskapai_nama : 'Lion Air',
        maskapai_logo : 'Lion Inter'
    }
  };
  
  const Jadwal = [
    {
        jadwal_id : 1,
        bandara_kode_keberangkatan : 'PDG',
        bandara_kode_kedatangan : 'CGK',
        maskapai_id : 'SJY'
    },
    {
        jadwal_id : 2,
        bandara_kode_keberangkatan : 'CGK',
        bandara_kode_kedatangan : 'TKG',
        maskapai_id : 'LNI'
    },
    {
        jadwal_id : 3,
        bandara_kode_keberangkatan : 'TKG',
        bandara_kode_kedatangan : 'JKT',
        maskapai_id : 'LNI'
    },
    {
        jadwal_id : 4,
        bandara_kode_keberangkatan : 'JKT',
        bandara_kode_kedatangan : 'PDG',
        maskapai_id : 'GIA'
    }
  ];
  
  const {bandara_kode_keberangkatan} = Jadwal[1];
  
  console.log({bandara_kode_keberangkatan});
  
  /**@param {string} bandara_kode */
  const getBandara = (bandara_kode) => Bandara[bandara_kode];
  
  console.log(getBandara(bandara_kode_keberangkatan));