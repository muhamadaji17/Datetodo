const DetailTabComponent = (dataApi: any) => {
  console.log("dadadad", dataApi);
  return (
    <div className="text-center">
      <div className="grid grid-cols-3">
        <label>Tanggal Kegiatan</label>
        <p>:</p>
        <p>{dataApi.dataApi.datetodo}</p>
      </div>
      <div className="grid grid-cols-3 mt-2">
        <label>Judul Kegiatan</label>
        <p>:</p>
        <p>{dataApi.dataApi.tittle}</p>
      </div>
      <div className="grid grid-cols-3 mt-2">
        <label>Deskripsi Kegiatan</label>
        <p>:</p>
        <p>{dataApi.dataApi.description}</p>
      </div>
      <div className="grid grid-cols-3 mt-2">
        <label>Status Kegiatan</label>
        <p>:</p>
        <p>
          {dataApi.dataApi.state === 1 ? (
            <p className="text-red-400">Belum</p>
          ) : dataApi.dataApi.state === 2 ? (
            "Proses"
          ) : dataApi.dataApi.state === 3 ? (
            "Selesai"
          ) : (
            "Status Tidak Diketahui"
          )}
        </p>
      </div>
    </div>
  );
};

export default DetailTabComponent;
