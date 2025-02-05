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
  "sk0yyAq32Wp5GeMASj0cOy0jAkyrfweXPMcsteB6pauT0JKiBQgbtbf9zTQaOzIceTt1fLgYBD76Nh0u1PgWfgkY9FzFlvmOOhzk9T2wBYZWRyVdtlLG4sqa0F9wGDzqZUBIvLSc0K82fU8Pk3lFI8coR6vsRuq3k23Xxs2zZcmLTO4lhet4",
  'Missing environment variable: NEXT_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
