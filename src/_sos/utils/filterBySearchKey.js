export const filterBySearchKey = (data, searchKey) => {
  const searchResult = data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(searchKey.toLowerCase())
    )
  })
  return searchResult
}
