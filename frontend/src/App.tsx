import Rotas from './routes/Rotas';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position='top-center' richColors />
      <Rotas />;
    </QueryClientProvider>
  );
}

export default App;
