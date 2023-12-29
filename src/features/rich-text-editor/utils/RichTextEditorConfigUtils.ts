/**
 * Quill modules to attach to editor
 * Refer https://quilljs.com/docs/modules/ for complete options
 */
const getEditorModules = () => ({
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
});

/**
 * Quill editor formats
 * Refer https://quilljs.com/docs/formats/
 */
const getEditorFormats = () => [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export { getEditorModules, getEditorFormats };
