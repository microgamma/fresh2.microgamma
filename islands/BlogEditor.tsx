import { useEffect, useState } from "preact/hooks";
import { parseMarkdown } from "../utils/markdown.ts";

interface BlogEditorProps {
  initialTitle?: string;
  initialContent?: string;
  initialTags?: string[];
  initialStatus?: "draft" | "published";
}

export default function BlogEditor({
  initialTitle = "",
  initialContent = "",
  initialTags = [],
  initialStatus = "draft",
}: BlogEditorProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [tags, setTags] = useState(initialTags);
  const [status, setStatus] = useState<"draft" | "published">(initialStatus);
  const [tagInput, setTagInput] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  // Calculate word count and reading time
  useEffect(() => {
    const words = content
      .replace(/[#*`]/g, "") // Remove markdown symbols
      .split(/\s+/)
      .filter((word) => word.length > 0);

    setWordCount(words.length);
    setReadingTime(Math.max(1, Math.ceil(words.length / 200)));
  }, [content]);

  const addTag = () => {
    const trimmedTag = tagInput.trim().toLowerCase();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleTagKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div class="space-y-6">
      {/* Title Input */}
      <div>
        <label class="block text-sm font-medium text-gray-300 mb-2">
          Title *
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onInput={(e) => setTitle((e.target as HTMLInputElement).value)}
          placeholder="Enter your blog post title..."
          class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          required
        />
      </div>

      {/* Tags */}
      <div>
        <label class="block text-sm font-medium text-gray-300 mb-2">
          Tags
        </label>
        <div class="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              class="inline-flex items-center px-3 py-1 bg-primary-900/30 text-primary-300 rounded-full text-sm"
            >
              #{tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                class="ml-2 text-primary-400 hover:text-primary-200"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div class="flex gap-2">
          <input
            type="text"
            value={tagInput}
            onInput={(e) => setTagInput((e.target as HTMLInputElement).value)}
            onKeyPress={handleTagKeyPress}
            placeholder="Add a tag..."
            class="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
          <button
            type="button"
            onClick={addTag}
            class="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-400 transition"
          >
            Add
          </button>
        </div>
        {/* Hidden input to store tags array */}
        <input
          type="hidden"
          name="tags"
          value={JSON.stringify(tags)}
        />
      </div>

      {/* Content Editor */}
      <div>
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-300">
            Content *
          </label>
          <div class="flex items-center space-x-4 text-sm text-gray-400">
            <span>{wordCount} words</span>
            <span>📖 {readingTime}min read</span>
            <button
              type="button"
              onClick={() => setPreviewMode(!previewMode)}
              class={`px-3 py-1 rounded text-xs font-medium transition ${
                previewMode
                  ? "bg-primary-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {previewMode ? "Edit" : "Preview"}
            </button>
          </div>
        </div>

        {previewMode
          ? (
            <div class="min-h-[400px] p-4 bg-gray-800/30 border border-gray-600 rounded-lg prose prose-invert prose-headings:text-primary-300 prose-a:text-primary-400 prose-strong:text-white prose-code:bg-gray-800 prose-code:text-primary-300 prose-code:px-1 prose-code:rounded max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
              />
            </div>
          )
          : (
            <textarea
              name="content"
              value={content}
              onInput={(e) =>
                setContent((e.target as HTMLTextAreaElement).value)}
              placeholder="Write your blog post in markdown..."
              rows={20}
              class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent font-mono text-sm"
              required
            />
          )}
      </div>

      {/* Action Buttons */}
      <div class="flex justify-between pt-6 border-t border-gray-600">
        <a
          href="/private/blog"
          class="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition inline-flex items-center"
        >
          Cancel
        </a>
        <div class="flex space-x-3">
          <button
            type="submit"
            name="action"
            value="draft"
            class="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            name="action"
            value="publish"
            class="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-400 transition"
          >
            {status === "published" ? "Publish" : "Save & Publish"}
          </button>
        </div>
      </div>
    </div>
  );
}
