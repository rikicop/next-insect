import Webcam from "part:sanity-plugin-asset-source-webcam/image-asset-source";

const getPosition = (options) => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
  }
}

export default {
  name: 'insect',
  title: 'Insect',
  type: 'document',
  initialValue: async () => ({
    postedAt: await getPosition()
      .then(({ coords }) => {
        const { latitude, longitude, altitude } = coords
        return {
          _type: 'geopoint',
          lat: latitude,
          lng: longitude,
          alt: altitude || undefined
        }
      })
      .catch(() => undefined())
  }),
  initialValue: async () => ({
    geo: await getPosition()
      .then(({ coords }) => {

        return (String(coords.latitude + ' ' + coords.longitude))

      })
      .catch(() => undefined())
  }),

  fields: [
    {
      name: 'postedAt',
      type: 'geopoint',
      title: 'Location'
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        sources: [Webcam]
      },
    },
    {
      name: 'geo',
      title: 'Geo',
      type: 'string'

    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
