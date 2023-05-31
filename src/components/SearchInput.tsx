const SearchInput = (props) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={props.placeholder}
        className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute top-1/2 right-3 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.5 15a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM16 9h-.35l-.24-.23A7 7 0 0014.5 5a6.5 6.5 0 10-6.47 8.42l.22.23V16l-3.25 2.44a.75.75 0 01-.98-1.14L7.5 15v-2.35l-.23-.22A6.5 6.5 0 107.5 17c.38 0 .74-.03 1.1-.09l.26.2L11 18.5v.01l.25.19c.36.06.72.1 1.1.1a7 7 0 004.9-11l-.24-.23L16 9z" clipRule="evenodd" />
      </svg>
    </div>
  )
}

export default SearchInput