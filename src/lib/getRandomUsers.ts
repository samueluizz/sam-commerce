export interface RandomUser {
  id: number;
  name: string;
  picture: string;
  location: string;
}

export interface RandomUserAPIResponse {
  results: {
    name: {
      first: string;
      last: string;
    };
    picture: {
      large: string;
    };
    location: {
      city: string;
      state: string;
    };
  }[];
}

function normalizeImageUrl(url: string): string {
  return url.replace('api.randomuser.me', 'randomuser.me');
}

export async function getRandomUsers(
  count: number = 12,
): Promise<RandomUser[]> {
  const response = await fetch(
    `https://randomuser.me/api/?results=${count}&nat=br`,
  );
  const data: RandomUserAPIResponse = await response.json();

  return data.results.map((user, index) => ({
    id: index + 1,
    name: `${user.name.first} ${user.name.last}`,
    picture: normalizeImageUrl(user.picture.large),
    location: `${user.location.city} - ${user.location.state}`,
  }));
}
