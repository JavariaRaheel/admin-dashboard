export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-04'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skPGi4ux8RsctLXsHuNUbe0FisVhXBvDknDgPK5TpE0rLGTffxFzYwq7gnJiNYY3niJA89GV7FlZXGnnssZUdeGsFGiRH2iKZgsWoEZdXOa9JHJ81IBFWCjYUhQffjP4cNrx4pf89AabhaErrFJyj92WdQlkqVGyLKRET3hQszt9z5uTVbQw",
  'Missing environment variable: NEXT_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
