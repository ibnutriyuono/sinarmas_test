const parseDate = (date) => {
  const months = [
    "Januari", 
    "Februari", 
    "Maret", 
    "April", 
    "Mei", 
    "Juni", 
    "Juli", 
    "Agustus", 
    "September", 
    "Oktober", 
    "November", 
    "Desember"
  ]
  return `${new Date(date).getDate()} ${months[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`
}

const parseAddress = (address, RT, RW, Kecamatan, Kelurahan) => {
  return `${address} RT ${RT} / RW ${RW} Kecamatan ${Kecamatan} Kelurahan ${Kelurahan}`
}

export {
  parseDate,
  parseAddress
} 