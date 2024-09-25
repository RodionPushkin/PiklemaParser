interface Pet {
    id: number;
    name: string;
    status: string;
  }
  
  async function fetchPets(status: string): Promise<void> {
    const url = `https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${status}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const pets: Pet[] = await response.json();
      console.log(pets);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }
  fetchPets('available');