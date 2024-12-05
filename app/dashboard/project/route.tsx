import {NextRequest, NextResponse} from 'next/server'

const API_URL = 'http://api.rcms.test' // Replace with your external API URL
const API_TOKEN = '1|pUM7Qa2au0TwC9D2EZEigoGK5PZy0NM2fFMnKio5cdaf02b4'

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url)

    // Extract query parameters
    const name = searchParams.get('name') || ''
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    // Build the external API URL with query parameters
    const externalApiUrl = `${API_URL}/project?name=${encodeURIComponent(name)}&page=${page}&limit=${limit}`

    // Fetch data from the external API
    const response = await fetch(externalApiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${API_TOKEN}`, // Include the Bearer token in the Authorization header
            'Content-Type': 'application/json'
        }
    })

    // Check if the response is okay (status 200-299)
    if (!response.ok) {
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to fetch data:' + (response.statusText ?? 'Unknown error'),
            },
            {
                status: response.status,
            }
        )
    }

    // Parse the response as JSON
    const results = await response.json()

    // Return the data as JSON
    return NextResponse.json({
        data: results.data, // Assuming the external API returns results in a "results" field
        // pagination: {
        //     page: Number(results.pagination.page),
        //     limit: Number(results.pagination.limit),
        //     total: Number(results.pagination.total)
        // }
    })
}
