import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tags for the post',
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the project',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the project',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Technologies used in the project',
    },
    featured: {
      type: 'boolean',
      default: false,
    },
    github: {
      type: 'string',
      description: 'GitHub repository URL',
    },
    live: {
      type: 'string',
      description: 'Live demo URL',
    },
    image: {
      type: 'string',
      description: 'Project image',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `/projects/${project._raw.flattenedPath.replace('projects/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (project) => project._raw.flattenedPath.replace('projects/', ''),
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post, Project],
})